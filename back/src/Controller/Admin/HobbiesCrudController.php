<?php

namespace App\Controller\Admin;

use App\Entity\Hobbies;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class HobbiesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Hobbies::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->hideOnForm(),
            TextField::new('name'),
            TextEditorField::new('description'),
        ];
    }
}
