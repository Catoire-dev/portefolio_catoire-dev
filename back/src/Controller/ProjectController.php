<?php

namespace App\Controller;

use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProjectController extends AbstractController
{
    #[Route('/project', name: 'app_project')]
    public function project(ProjectRepository $pr): Response
    {
        $projects = $pr->findAll();

        return $this->render('project/project.html.twig', [
            'projects' => $projects
        ]);
    }

    #[Route('/project/{id}', name: 'app_project_details')]
    public function project_details(int $id, ProjectRepository $pr): Response
    {
        if (!$p = $pr->find($id)) {
            return $this->render('error/error404.html.twig');
        }
        return $this->render('project/project_details.html.twig', [
            'p' => $p
        ]);
    }
}
