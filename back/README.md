
# Back section

This folder contain the back end for my portfolio.
It's write with symphny and use the bundle easyAdmin.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`DATABASE_URL` Set to your database URL


## Run Locally

Create an Empty database and set the env variable with its adress.

Clone the project

```bash
  git clone https://github.com/Catoire-dev/portefolio_catoire-dev/tree/main/back
```

Go to the project directory

```bash
  cd back
```

Install dependencies

```bash
  composer install
```

Start the server

```bash
  php -S localhost:8000 -t public/
```


## Usage/Examples

### administration
You can administrate the Portfolio via this url :
`/admin`
You have to be connected with an admin user.

### Create first User/s
You have to create the first user in your database mannager.
Set his role to `ROLE_ADMIN`.
After create you can securise the password by modify the password in panel admin, with this way the password will be hashed.

### Setup
Access only by `ROLE_ADMIN`.

Url : `/setup`

You can use this section to add random thing in database. Just click on the button that correspond to the object that you want to add.
Random data generate by [Faker](https://fakerphp.github.io/).
Customize data as you want while data given is consistant with dataType, Examples :
``` 
->setEmail('SomethingYouWant@custom.com')
->setName('AwesomeName')
```

Default password for user is `123456`, really safe password.

### Admin panel
Url : `/admin`

You can only access this panel only while logged in with Administrator user. If your are not log in, the log in page will be display.

Here you can create, modify and delete all section of the Portfolio :
- User
- Project
- CV
    - Project
    - Professional Experience
    - Studies
    - Hobbies



## Authors

- [@Catoire-dev](https://www.github.com/catoire-dev)
