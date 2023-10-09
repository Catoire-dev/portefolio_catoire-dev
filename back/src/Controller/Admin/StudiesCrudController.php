<?php

namespace App\Controller\Admin;

use App\Entity\Studies;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class StudiesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Studies::class;
    }
    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->hideOnForm(),
            TextField::new('certificate'),
            TextField::new('city'),
            TextField::new('school'),
            TextEditorField::new('description')
                ->hideOnIndex(),
            BooleanField::new('inProgress')
                ->renderAsSwitch(false)
            // DateField::new('date')
        ];
    }
}
