# Makefile
SHELL := /bin/bash

# Configurações iniciais
START_PORT_SITE = 3000

.PHONY: help setup find-ports up down stop start logs sh npm build

help: ## Mostra os comandos disponíveis
	@echo "Comandos disponíveis:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}'

setup: ## Configura o .env inicial (Uso: make setup ou make setup NAME=nome-do-projeto)
	@if [ ! -f .env ]; then \
		echo "Criando .env para o projeto..."; \
		cp .env.example .env; \
		if [ ! -z "$(NAME)" ]; then \
			sed -i '' "s/COMPOSE_PROJECT_NAME=.*/COMPOSE_PROJECT_NAME=$(NAME)/" .env; \
		fi; \
	fi

find-ports: setup ## Encontra porta livre para o Next.js (Versão Mac)
	@echo "Verificando portas disponíveis..."
	@PROJECT_NAME=$$(grep COMPOSE_PROJECT_NAME .env | cut -d'=' -f2); \
	PORT_SITE=$$(grep PORTA_SITE .env | cut -d'=' -f2); \
	if [ ! -z "$$PORT_SITE" ]; then \
		if nc -z 127.0.0.1 $$PORT_SITE 2>/dev/null; then \
			IS_MINE=$$(docker ps --filter "publish=$$PORT_SITE" --filter "label=com.docker.compose.project=$$PROJECT_NAME" -q); \
			if [ -z "$$IS_MINE" ]; then \
				echo "Porta Site ($$PORT_SITE) em uso por outro projeto. Redefinindo..."; \
				sed -i '' "s/PORTA_SITE=$$PORT_SITE/PORTA_SITE=/" .env; \
			fi; \
		fi; \
	fi; \
	PORT_SITE=$$(for port in $$(seq $(START_PORT_SITE) 3050); do \
		if ! nc -z 127.0.0.1 $$port 2>/dev/null; then echo $$port; break; fi; \
	done); \
	if [ -z "$$PORT_SITE" ]; then echo "Nenhuma porta livre encontrada para o Site!"; exit 1; fi; \
	if grep -q "PORTA_SITE=$$" .env; then \
		sed -i '' "s/PORTA_SITE=/PORTA_SITE=$$PORT_SITE/" .env; \
		echo "Porta do Site definida para: $$PORT_SITE"; \
	else \
		echo "Porta do Site já definida ($$(grep PORTA_SITE .env | cut -d '=' -f2))."; \
	fi

up: find-ports ## Sobe os containers em segundo plano
	@echo "Iniciando container Next.js..."
	docker compose up -d --build
	@echo "-----------------------------------"
	@echo "Projeto rodando!"
	@echo "Site: http://localhost:$$(grep PORTA_SITE .env | cut -d '=' -f2)"
	@echo "-----------------------------------"

down: ## Para e remove os containers
	docker compose down

stop: ## Apenas para os containers sem remover
	docker compose stop

start: ## Inicia containers parados
	docker compose start

logs: ## Exibe os logs do Next.js em tempo real
	docker compose logs -f app

sh: ## Entra no terminal do container Next.js
	docker compose exec app sh

npm: ## Executa comandos npm no container (Ex: make npm ARGS="install lucide-react")
	docker compose exec app npm $(ARGS)

build: ## Executa o build de produção do Next.js
	docker compose exec -e NODE_ENV=production app npm run build
