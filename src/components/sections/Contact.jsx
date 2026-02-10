import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 16px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Card = styled.div`
  width: 95%;
  max-width: 760px;
  margin-top: 26px;

  border-radius: 18px;
  padding: 22px;
  position: relative;
  overflow: hidden;

  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 12px 34px;
  backdrop-filter: blur(10px);

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Heading = styled.div`
  font-size: 22px;
  font-weight: 900;
  color: ${({ theme }) => theme.text_primary};
`;

const SubHeading = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: -6px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 2px 0 6px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const TopRow = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.div`
  font-size: 13px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_secondary};
`;

const Input = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 14px;
  padding: 12px 14px;
  transition: border 0.15s ease, transform 0.15s ease, background 0.15s ease;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.7;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-1px);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  resize: none;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 14px;
  padding: 12px 14px;
  transition: border 0.15s ease, transform 0.15s ease, background 0.15s ease;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.7;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-1px);
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Status = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme, type }) =>
    type === "success"
      ? "#3ddc97"
      : type === "error"
      ? "#ff6b6b"
      : theme.text_secondary};
  opacity: ${({ type }) => (type ? 1 : 0.85)};
`;

const Button = styled.button`
  border: none;
  cursor: pointer;

  padding: 12px 16px;
  border-radius: 14px;

  font-size: 16px;
  font-weight: 900;

  color: white;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );

  box-shadow: rgba(0, 0, 0, 0.18) 0px 10px 22px;
  transition: transform 0.15s ease, filter 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
  }

  &:active {
    transform: translateY(0px);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    transform: none;
    filter: none;
  }
`;

const SentCard = styled.div`
  width: 95%;
  max-width: 760px;
  margin-top: 16px;

  border-radius: 18px;
  padding: 18px;

  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 10px 26px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SentTitle = styled.div`
  font-size: 16px;
  font-weight: 900;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SentMeta = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
`;

const SentBody = styled.pre`
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 14px;
  padding: 12px;
`;

const SERVICE_ID = "service_42f02iq";
const TEMPLATE_ID = "template_479ozz7";
const PUBLIC_KEY = "5yx3ufrSQt9UF-4CS";

const Contact = () => {
  const [form, setForm] = useState({
    from_email: "",
    from_name: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [lastSent, setLastSent] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "Sending..." });

    const fullMessage =
      `From: ${form.from_name} <${form.from_email}>\n` +
      `Subject: ${form.subject}\n\n` +
      `${form.message}`;

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_email: form.from_email,
          from_name: form.from_name,
          subject: form.subject,
          message: fullMessage, // ✅ send all as one message
        },
        PUBLIC_KEY
      );

      const sent = {
        ...form,
        message: fullMessage,
        sentAt: new Date().toLocaleString(),
      };

      setLastSent(sent); // ✅ show the sent message to the sender
      setStatus({ type: "success", text: "Message sent successfully!" });

      setForm({ from_email: "", from_name: "", subject: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", text: "Failed to send. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc style={{ marginBottom: "24px" }}>
          Feel free to reach out for collaborations, opportunities, or questions.
        </Desc>

        <Card>
          <Heading>Email Me</Heading>
          <SubHeading>I usually reply within 24–48 hours.</SubHeading>
          <Divider />

          <Form onSubmit={handleSubmit}>
            <TopRow>
              <Field>
                <Label>Your Email</Label>
                <Input
                  type="email"
                  name="from_email"
                  placeholder="you@example.com"
                  value={form.from_email}
                  onChange={onChange}
                  required
                />
              </Field>

              <Field>
                <Label>Your Name</Label>
                <Input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  value={form.from_name}
                  onChange={onChange}
                  required
                />
              </Field>
            </TopRow>

            <Field>
              <Label>Subject</Label>
              <Input
                type="text"
                name="subject"
                placeholder="What is this about?"
                value={form.subject}
                onChange={onChange}
                required
              />
            </Field>

            <Field>
              <Label>Message</Label>
              <TextArea
                name="message"
                rows={5}
                placeholder="Write your message..."
                value={form.message}
                onChange={onChange}
                required
              />
            </Field>

            <Actions>
              <Status type={status.type}>{status.text}</Status>
              <Button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Actions>
          </Form>
        </Card>

        {lastSent && (
          <SentCard>
            <SentTitle>✅ Your message was sent</SentTitle>
            <SentMeta>
              {lastSent.sentAt} • {lastSent.from_name} ({lastSent.from_email})
            </SentMeta>
            <SentBody>{lastSent.message}</SentBody>
          </SentCard>
        )}
      </Wrapper>
    </Container>
  );
};

export default Contact;
