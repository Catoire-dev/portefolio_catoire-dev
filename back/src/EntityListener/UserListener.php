<?php

namespace App\EntityListener;

use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserListener {
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $h)
    {
        $this->hasher = $h;
    }

    public function prePersist(User $u) {
        $this->hashPwd($u);
    }

    public function preUpdate(User $u) {
        $this->hashPwd($u);
    }

    private function hashPwd(User $u) {
        if (($plainPwd = $u->getPlainPwd()) === null)
            return;

        $pwd = $this->hasher->hashPassword($u, $plainPwd);
        $u->setPassword($pwd);
        $u->setPlainPwd('');
    }
}