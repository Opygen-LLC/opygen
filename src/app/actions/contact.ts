"use server";

interface ContactFormData {
    name: string;
    email: string;
    website?: string;
    budget?: string;
    message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
    const apiKey = process.env.RESEND_API_KEY;
    const receivingEmail = process.env.RECEIVING_EMAIL;

    if (!apiKey) {
        console.error("Missing RESEND_API_KEY environment variable");
        return {
            success: false,
            error: "Email sending is not configured (missing API key).",
        };
    }

    if (!receivingEmail) {
        console.error("Missing RECEIVING_EMAIL environment variable");
        return {
            success: false,
            error: "Email sending is not configured (missing recipient email).",
        };
    }

    const { name, email, website, budget, message } = formData;

    // Simple validation
    if (!name || name.trim() === "") {
        return { success: false, error: "Name is required." };
    }
    if (!email || !email.includes("@")) {
        return { success: false, error: "A valid email address is required." };
    }
    if (!message || message.trim() === "") {
        return { success: false, error: "Message is required." };
    }

    try {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                from: "Opygen Contact Form <onboarding@resend.dev>",
                to: receivingEmail,
                subject: `New Contact Form Submission from ${name}`,
                html: `
                    <div style="font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #0a0a0a;">

                        <!-- Outer card -->
                        <div style="border: 1px solid rgba(10,10,10,0.1); border-radius: 20px; overflow: hidden;">

                            <!-- Header -->
                            <div style="background-color: #0a0a0a; padding: 28px 32px;">
                            <span style="display: inline-block; padding: 6px 12px; border: 1px solid rgba(255,255,255,0.18); border-radius: 99px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.16em; color: rgba(255,255,255,0.55);">
                                Contact
                            </span>
                            <h1 style="margin: 14px 0 0 0; font-size: 24px; font-weight: 800; letter-spacing: -0.02em; color: #ffffff;">
                                New Submission
                            </h1>
                            </div>

                            <!-- Body -->
                            <div style="padding: 32px; background-color: #ffffff;">

                            <!-- Name -->
                            <div style="margin-bottom: 18px;">
                                <p style="margin: 0 0 4px 0; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.16em; color: rgba(10,10,10,0.4);">/Name</p>
                                <p style="margin: 0; font-size: 15px; font-weight: 700; color: #0a0a0a;">${name}</p>
                            </div>

                            <hr style="border: none; border-top: 1px dashed rgba(10,10,10,0.15); margin: 0 0 18px 0;" />

                            <!-- Email -->
                            <div style="margin-bottom: 18px;">
                                <p style="margin: 0 0 4px 0; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.16em; color: rgba(10,10,10,0.4);">/E-Mail</p>
                                <p style="margin: 0; font-size: 15px; font-weight: 700;">
                                <a href="mailto:${email}" style="color: #0a0a0a; text-decoration: underline;">${email}</a>
                                </p>
                            </div>

                            <hr style="border: none; border-top: 1px dashed rgba(10,10,10,0.15); margin: 0 0 18px 0;" />

                            <!-- Website + Budget row -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 18px;">
                                <tr>
                                    <td style="width: 50%; vertical-align: top; padding-right: 12px;">
                                        <p style="margin: 0 0 4px 0; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.16em; color: rgba(10,10,10,0.4);">/Website</p>
                                            ${
                                                website
                                                    ? `<p style="margin: 0; font-size: 15px; font-weight: 700;"><a href="${website.startsWith("http") ? website : `https://${website}`}" target="_blank" style="color: #0a0a0a; text-decoration: underline;">${website}</a></p>`
                                                    : `<p style="margin: 0; font-size: 15px; font-weight: 700; color: rgba(10,10,10,0.35);">N/A</p>`
                                            }
                                    </td>
                                    <td style="width: 50%; vertical-align: top;">
                                        <p style="margin: 0 0 4px 0; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.16em; color: rgba(10,10,10,0.4);">/Budget</p>
                                        <p style="margin: 0; font-size: 15px; font-weight: 700; color: ${budget ? "#0a0a0a" : "rgba(10,10,10,0.35)"};">${budget || "N/A"}</p>
                                    </td>
                                </tr>
                            </table>

                            <hr style="border: none; border-top: 1px dashed rgba(10,10,10,0.15); margin: 0 0 18px 0;" />

                            <!-- Message -->
                            <div style="background-color: #f7f8f7; border: 1px solid rgba(10,10,10,0.08); border-radius: 16px; padding: 20px;">
                                <p style="margin: 0 0 8px 0; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.16em; color: rgba(10,10,10,0.4);">/Message</p>
                                <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #262626; white-space: pre-wrap;">${message}</p>
                            </div>

                            </div>

                            <!-- Footer -->
                            <div style="padding: 18px 32px; background-color: #f7f8f7; border-top: 1px dashed rgba(10,10,10,0.12); text-align: center;">
                            <p style="margin: 0; font-size: 11px; color: rgba(10,10,10,0.4); letter-spacing: 0.04em;">
                                Sent from the Opygen contact form
                            </p>
                            </div>

                        </div>
                    </div>
                    `,
                replyTo: email,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Resend API response error:", errorData);
            return {
                success: false,
                error:
                    errorData.message ||
                    `Failed to send email (Status: ${response.status}).`,
            };
        }

        const data = await response.json();
        return { success: true, data };
    } catch (error: any) {
        console.error("Error sending contact email via Resend:", error);
        return {
            success: false,
            error:
                error.message ||
                "An unexpected error occurred while sending the email.",
        };
    }
}
