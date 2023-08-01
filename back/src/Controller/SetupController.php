<?php

namespace App\Controller;

use DateTime;
use Faker\Factory;
use App\Entity\Project;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

// require_once 'vendor/autoload.php';



class SetupController extends AbstractController {

    #[Route('/setup', name: 'app_setup')]
    public function setup(EntityManagerInterface $emi, ProjectRepository $pr): Response {

        $faker = Factory::create();


        for ($i=0; $i < 8; $i++) { 
            $new = new Project();
            $new->setName($faker->name())
            ->setDate(new DateTime())
            ->setDescription($faker->realTextBetween(350, 600, 2))
            ->setShort($faker->realTextBetween(50, 100, 2))
            ->setImg('https://picsum.photos/1000/563')
            ->setThumbnail('https://picsum.photos/200')
            ->setLink('http://localhost:8000/');
            
            $emi->persist($new);
            $emi->flush();

            $tab[] = $new;
        }
        return $this->render('setup/setup.html.twig', [
            'tab' => $tab
        ]);
    }
}
