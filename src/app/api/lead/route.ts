import nodemailer from 'nodemailer';

interface LeadPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  role?: string;
  teamSize?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const phone = (body.phone || '').trim();
    const company = (body.company || '').trim();
    const role = (body.role || '').trim();
    const teamSize = (body.teamSize || 'Não informado').trim();

    if (!name || !email || !phone || !company || !role) {
      return Response.json(
        {
          success: false,
          error: 'Preencha todos os campos obrigatórios.',
        },
        { status: 400 }
      );
    }

    const toEmail = process.env.LEAD_TO_EMAIL || 'comercial@mundologistica.com.br';
    const smtpHost = process.env.SMTP_HOST || '';
    const smtpPort = Number(process.env.SMTP_PORT || '465');
    const smtpUser = process.env.SMTP_USER || '';
    const smtpPass = process.env.SMTP_PASS || '';
    const smtpFrom = process.env.SMTP_FROM || smtpUser || 'no-reply@mundologistica.com.br';

    const dateFormatted = new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'medium',
      timeZone: 'America/Sao_Paulo',
    }).format(new Date());

    const subject = `[Novo Lead B2B] ${company} — ${name} (${teamSize})`;

    const htmlBody = `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0b0f17; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #262b36;">
        <div style="background: linear-gradient(90deg, #ff3d03 0%, #b42b00 100%); padding: 24px 28px;">
          <p style="margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #ffe4dc; font-weight: bold;">
            Plataforma Corporativa MundoLogística
          </p>
          <h1 style="margin: 6px 0 0 0; font-size: 22px; color: #ffffff;">
            Nova Solicitação de Proposta B2B
          </h1>
        </div>

        <div style="padding: 28px;">
          <p style="margin: 0 0 20px 0; color: #cbd5e1; font-size: 14px; line-height: 1.5;">
            Um novo contato corporativo preencheu o formulário de solicitação de proposta na plataforma:
          </p>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 12px; border-bottom: 1px solid #1e293b; color: #94a3b8; width: 38%;">Nome Completo</td>
              <td style="padding: 10px 12px; border-bottom: 1px solid #1e293b; color: #ffffff; font-weight: bold;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Empresa</td>
              <td style="padding: 10px 12px; border-bottom: 1px solid #1e293b; color: #ff6a3d; font-weight: bold;">${escapeHtml(company)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Cargo / Função</td>
              <td style="padding: 10px 12px; border-bottom: 1px solid #1e293b; color: #ffffff;">${escapeHtml(role)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Tamanho da Equipe</td>
              <td style="padding: 10px 12px; border-bottom: 1px solid #1e293b; color: #ffffff; font-weight: bold;">${escapeHtml(teamSize)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">E-mail Corporativo</td>
              <td style="padding: 10px 12px; border-bottom: 1px solid #1e293b;">
                <a href="mailto:${escapeHtml(email)}" style="color: #38bdf8; text-decoration: none;">${escapeHtml(email)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">WhatsApp</td>
              <td style="padding: 10px 12px; border-bottom: 1px solid #1e293b; color: #34d399; font-weight: bold;">${escapeHtml(phone)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; color: #94a3b8;">Data / Hora</td>
              <td style="padding: 10px 12px; color: #94a3b8;">${escapeHtml(dateFormatted)}</td>
            </tr>
          </table>
        </div>
      </div>
    `;

    const textBody = [
      'NOVA SOLICITAÇÃO DE PROPOSTA B2B — MUNDOLOGÍSTICA',
      '--------------------------------------------------',
      `Nome: ${name}`,
      `Empresa: ${company}`,
      `Cargo: ${role}`,
      `Tamanho da Equipe: ${teamSize}`,
      `E-mail: ${email}`,
      `WhatsApp: ${phone}`,
      `Data/Hora: ${dateFormatted}`,
    ].join('\n');

    // Caso o SMTP ainda não tenha sido preenchido no .env, registra no log do servidor sem quebrar a experiência
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log('[LEAD RECEBIDO - SMTP NÃO CONFIGURADO NO .ENV]:', {
        toEmail,
        name,
        email,
        phone,
        company,
        role,
        teamSize,
        dateFormatted,
      });

      return Response.json({
        success: true,
        mode: 'logged_only',
        message: 'Lead registrado com sucesso (configure SMTP_HOST, SMTP_USER e SMTP_PASS no .env para envio ativo por e-mail).',
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"MundoLogística B2B" <${smtpFrom}>`,
      to: toEmail,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return Response.json({
      success: true,
      mode: 'email_sent',
    });
  } catch (error) {
    console.error('[ERRO AO ENVIAR LEAD]:', error);
    return Response.json(
      {
        success: false,
        error: 'Não foi possível processar o envio no momento. Tente novamente em instantes.',
      },
      { status: 500 }
    );
  }
}
