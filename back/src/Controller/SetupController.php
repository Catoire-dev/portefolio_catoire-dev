<?php

namespace App\Controller;

use App\Entity\Hobbies;
use DateTime;
use Faker\Factory;
use App\Entity\Project;
use App\Entity\Studies;
use App\Entity\User;
use App\Entity\XpPro;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class SetupController extends AbstractController {
    private $faker;

    public function __construct() {
        $this->faker = Factory::create();
    }
    #[Route('/setup', name: 'app_setup')]
    public function setup(): Response {
        
        return $this->render('setup/setup.html.twig', [
            'tab' => null
        ]);  
    }


    #[Route('/setup/user', name: 'app_setup_user')]
    public function setup_user(EntityManagerInterface $emi, UserPasswordHasherInterface $butcher): Response {

        for ($i=0; $i < 10; $i++) {
            $new = new User();
            $new->setEmail($this->faker->email())
            ->setCreateAt(new DateTimeImmutable())
            ->setIsVerified(false)
            ->setRoles(['ROLE_USER'])
            ->setPassword($butcher->hashPassword($new, '123456'));
            
            $emi->persist($new);
            $emi->flush();

            $tab[] = $new;
        }

        return $this->render('setup/setup.html.twig', [
            'tab' => $tab
        ]);        
    }

    #[Route('/setup/project', name: 'app_setup_project')]
    #[IsGranted('ROLE_ADMIN')]
    public function setup_project(EntityManagerInterface $emi): Response {

        for ($i=0; $i < 8; $i++) { 
            $new = new Project();
            $new->setName($this->faker->name())
            ->setDate(new DateTime())
            ->setDescription($this->faker->realTextBetween(350, 600, 2))
            ->setShort($this->faker->realTextBetween(50, 100, 2))
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

    #[Route('/setup/xppro', name: 'app_setup_xppro')]
    public function setup_xppro(EntityManagerInterface $emi): Response {

        for ($i=0; $i < 5; $i++) { 
            $new = new XpPro();
            $new->setTitle($this->faker->jobTitle())
                ->setCompagny($this->faker->company())
                ->setCity($this->faker->city())    
                ->setDate(new DateTime())
                ->setDescription($this->faker->realTextBetween(200, 300, 2))
                ->setInProgress(rand(0, 1));
            
            $emi->persist($new);
            $emi->flush();

            $tab[] = $new;
        }
        return $this->render('setup/setup.html.twig', [
            'tab' => $tab
        ]);
    }

    #[Route('/setup/studies', name: 'app_setup_studies')]
    public function setup_studies(EntityManagerInterface $emi): Response {

        for ($i=0; $i < 5; $i++) { 
            $new = new Studies();
            $new->setCertificate($this->faker->jobTitle())
                ->setSchool($this->faker->company())
                ->setCity($this->faker->city())    
                ->setDate(new DateTime())
                ->setDescription($this->faker->realTextBetween(200, 300, 2))
                ->setInProgress(rand(0, 1));
            
            $emi->persist($new);
            $emi->flush();

            $tab[] = $new;
        }
        return $this->render('setup/setup.html.twig', [
            'tab' => $tab
        ]);
    }

    #[Route('/setup/hobbies', name: 'app_setup_hobbies')]
    public function setup_hobbies(EntityManagerInterface $emi): Response {

        for ($i=0; $i < 5; $i++) { 
            $new = new Hobbies();
            $new->setName($this->faker->jobTitle())
                ->setDescription($this->faker->realTextBetween(200, 300, 2));
            
            $emi->persist($new);
            $emi->flush();

            $tab[] = $new;
        }
        return $this->render('setup/setup.html.twig', [
            'tab' => $tab
        ]);
    }
}
