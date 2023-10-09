<?php

namespace App\Controller\Api;

use App\Repository\UserRepository;
use App\Repository\XpProRepository;
use App\Repository\ProjectRepository;
use App\Repository\StudiesRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{
    private function error_401() {
        return $this->json([
            'status' => 401,
            'message' => 'access denied'
        ], 401);
    }

    private function error_404() {
        return $this->json([
            'status' => 404,
            'message' => 'Not Found'
        ], 404);
    }

    // private function error_type(TypeError $e) {
    //     return $this->json([
    //         'status' => 400,
    //         'message' => 'Bad request, id must be an integer.',
    //         'ExeptionMessage' => $e->getMessage()
    //     ], 400);
    // }

    // API Home -----------------
    #[Route('/api', name: 'app_api', methods: ['GET'])]
    public function Api(ProjectRepository $pr, NormalizerInterface $ni): Response
    {
        return $this->render('api/api.html.twig', [
            'app_name' => 'catoire-dev',
            'api_url' => 'localhost:8000'
        ]);
    }
    // --------------------------


    // Projects -----------------
    #[Route('/api/projects', name: 'app_api_projects', methods: ['GET'])]
    public function Api_projects(Request $r, ProjectRepository $pr, NormalizerInterface $ni): Response {
        // if ($r->headers->get('API_KEY') == $this->getParameter('API_KEY')){
            if ($data = $pr->findAll()){
                // dd($this->json($data, 200, [], [DateTimeNormalizer::FORMAT_KEY => 'Y-m']));
                // dd($data);
                return $this->json($data, 200);}
            return $this->error_404();
        // }
        return $this->error_401();
    }

    #[Route('/api/projects/{id}', name: 'api_project', methods: ['GET'])]
    public function Api_project(int $id, Request $r, ProjectRepository $pr, SerializerInterface $serializer): Response {
        if (($r->headers->get('API_KEY') == $this->getParameter('API_KEY')) && $id >= 1) {
            if ($data = $pr->find($id))
                return $this->json($data, 200);
            return $this->error_404();
        }
        return $this->error_401();
    }
    //----------------------------


    // Studies -------------------
    #[Route('/api/studies', name: 'api_studies', methods: ['GET'])]
    public function Api_Studies(Request $r, StudiesRepository $sr, SerializerInterface $serializer): Response {
        if ($r->headers->get('API_KEY') == $this->getParameter('API_KEY')){
            if ($data = $sr->findAll())
                return $this->json($data, 200);
            return $this->error_404();
        } 
        return $this->error_401();
    }

    #[Route('/api/studies/{id}', name: 'api_studie', methods: ['GET'])]
    public function Api_Studie(int $id, Request $r, StudiesRepository $sr, SerializerInterface $serializer): Response {
        if (($r->headers->get('API_KEY') == $this->getParameter('API_KEY'))) {
            if ($data = $sr->find($id))
                return $this->json($data, 200);
            return $this->error_404();
        }
        return $this->error_401();
    }
    // ----------------------------


    // xpPro-----------------------
    #[Route('/api/xpPros', name: 'api_xpPros', methods: ['GET'])]
    public function Api_xpPros(Request $r, XpProRepository $xpr, SerializerInterface $serializer): Response {
        if ($r->headers->get('API_KEY') == $this->getParameter('API_KEY')){
            if ($data = $xpr->findAll())
                return $this->json($data, 200);
            return $this->error_404();
        } 
        return $this->error_401();
    }

    #[Route('/api/xpPros/{id}', name: 'api_xpPro', methods: ['GET'])]
    public function Api_xpPro(int $id, Request $r,XpProRepository $xpr, SerializerInterface $serializer): Response {
        if (($r->headers->get('API_KEY') == $this->getParameter('API_KEY')) && $id >= 1) {
            if ($data = $xpr->find($id))
                return $this->json($data, 200);
            return $this->error_404();
        }
        return $this->error_401();
    }
    // ----------------------------


    // about-----------------------
    #[Route('/api/about', name: 'api_about', methods: ['GET'])]
    public function Api_about(Request $r, UserRepository $ur): Response {
        if ($r->headers->get('API_KEY') == $this->getParameter('API_KEY')) {
            if ($data = $ur->find(1)->getBio())
                return $this->json($data, 200);
            return $this->error_404();
        }
        return $this->error_401();
    }
    // ----------------------------
}