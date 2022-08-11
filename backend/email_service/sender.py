from backend.email_service.google_email_service import send_message, create_message, create_message_with_html
from backend.email_service.google_service import create_service


def send_mail_only_text(recipient, message_text, subject):
    sender = 'me'

    service = create_service()
    message = create_message(sender=sender, to=recipient, subject=subject, message_text=message_text)
    message_info = send_message(service=service, user_id='me', message=message)
    print(message_info)


def send_mail_with_html(recipient, message_text, subject, html_text):
    sender = 'me'

    service = create_service()
    message = create_message_with_html(sender=sender, to=recipient, subject=subject, message_text=message_text, html_text=html_text)
    message_info = send_message(service=service, user_id='me', message=message)
    print(message_info)


if __name__ == '__main__':
    # send_mail_only_text(
    #     recipient='an049@hdm-stuttgart.de',
    #     message_text='Test',
    #     subject='Python email sending'
    # )

    with open('templates/approve_IP_mail.html') as file:
        html = file.read()

        send_mail_with_html(
            recipient='an049@hdm-stuttgart.de',
            message_text='Test',
            subject='Login Confirmation',
            html_text=html.replace('{ip}', '127.0.0.1')
        )
