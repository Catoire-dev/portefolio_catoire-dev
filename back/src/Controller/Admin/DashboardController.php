<?php

namespace App\Controller\Admin;

use App\Entity\Hobbies;
use App\Entity\Project;
use App\Entity\Studies;
use App\Entity\User;
use App\Entity\XpPro;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    #[IsGranted('ROLE_ADMIN', message:'Ta rien a foutre ici, casse toi')]
    public function index(): Response
    {
        return $this->render('admin/admin.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Back');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Users', 'fas fa-list', User::class);
        yield MenuItem::linkToCrud('Project', 'fas fa-list', Project::class);
        yield MenuItem::linkToCrud('XpPro', 'fas fa-list', XpPro::class);
        yield MenuItem::linkToCrud('Studies', 'fas fa-list', Studies::class);
        yield MenuItem::linkToCrud('Hobbies', 'fas fa-list', Hobbies::class);
    }
}

