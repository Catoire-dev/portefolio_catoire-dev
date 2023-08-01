<?php

namespace App\Controller\Admin;

use App\Entity\XpPro;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;

class XpProCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return XpPro::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->hideOnForm(),
            TextField::new('title'),
            TextField::new('city')
                ->hideOnIndex(),
            TextField::new('compagny'),
            TextEditorField::new('description')
                ->hideOnIndex(),
            BooleanField::new('inProgress')
                ->renderAsSwitch(false)
            // DateField::new('date')
        ];
    }
    
}
