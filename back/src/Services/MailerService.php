<?php

namespace App\Services;

use Symfony\Component\Mailer\MailerInterface;
Use Symfony\Component\Mime\Email;

class MailerService
{
    public function __construct (private MailerInterface $mailer) {

    }

    public function sendEmail(
        $to = 'siteadmin@hotmail.fr',
        $subject = 'This is the Mail subject !',
        $content = '',
        $text = ''
    ): void{
        $email = (new Email())
            ->from($to)
            ->replyTo($to)
            ->to('cy.catoire.dev@gmail.com')
            ->subject($subject)
            ->text($text)
            ->html($content);
        $this->mailer->send($email);
    }
}
