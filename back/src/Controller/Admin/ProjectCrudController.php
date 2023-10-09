<?php

namespace App\Controller\Admin;

use App\Entity\Project;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;

class ProjectCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Project::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->hideOnForm(),
            TextField::new('name'),
            TextField::new('company'),
            TextField::new('period'),
            TextEditorField::new('description')
                ->hideOnIndex(),
            TextEditorField::new('short')
                ->hideOnIndex(),
            ImageField::new('img')
            // ->setRequired($pageName === Crud::PAGE_NEW)
                ->setBasePath('assets/image')
                ->setUploadDir('/public/assets/image')
                ->hideOnIndex(),
            ImageField::new('thumbnail')
                // ->setRequired($pageName === Crud::PAGE_NEW)
                ->setBasePath('assets/image')
                ->setUploadDir('/public/assets/image'),
            UrlField::new('link')
                ->hideOnIndex(),
        ];
    }
}
