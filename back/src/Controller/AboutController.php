<?php

namespace App\Controller;

use App\Repository\HobbiesRepository;
use App\Repository\StudiesRepository;
use App\Repository\UserRepository;
use App\Repository\XpProRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AboutController extends AbstractController
{
    #[Route('/about', name: 'app_about')]
    public function about(Request $r, XpProRepository $xpr, StudiesRepository $sr, HobbiesRepository $hr, UserRepository $ur): Response
    {
        return $this->render('about/about.html.twig', [
            'xpPro' => $xpr->findAll(),
            'studies' => $sr->findAll(),
            'hobbies' => $hr->findAll(),
            'bio' => $this->getUser()->getBio()
        ]);
    }
}
