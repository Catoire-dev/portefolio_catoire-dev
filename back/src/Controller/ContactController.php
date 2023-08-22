<?php

namespace App\Controller;

use App\Form\ContactType;
use App\Services\MailerService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $r, MailerService $ms): Response
    {
        $form = $this->createForm(ContactType::class);
        $form->handleRequest($r);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $ms->sendEmail(
                $data['email'], 
                $data['subject'],
                $data['message'],
                $data['message']
            );     
            $this->addFlash('success', 'Votre message a été envoyé');
            return $this->redirectToRoute('app_home');
        }

        return $this->render('contact/contact.html.twig', [
            'form' => $form
        ]);
    }
}
