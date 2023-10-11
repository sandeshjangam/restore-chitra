<h1 align="center">RestoreChitra.com</h1>

<p align="center">
<a href="#"><img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fforge.laravel.com%2Fsite-badges%2Fe50e3559-c6d4-47cd-92ff-1bd19edfbc92%3Fdate%3D1%26commit%3D1&style=flat-square" alt="License"></a>
<a href="#"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About the project

I noticed that there is a significant surge in AI applications. Many developers are using NextJS and a few 3rd-party APIs to create AI applications.

***I thought, why not Laravel & React?***

So, I created a similar open-source application using Laravel and ReactJS to help new developers learn and understand how to create an AI application using Laravel and ReactJS.

## How to run the project locally

### Prerequisites
- PHP 8.1 or higher
- Composer 2.5 or higher
- NodeJS 18 or higher
- NPM 8 or higher
- MySQL 8 or higher
- AWS S3 Bucket
- Replicate API Key

### Setup
- Clone the repository `git clone`
- Create a `.env` file and copy the contents from `.env.example`
- Update the `.env` file with
    - **Database credentials**
    - **Google login credentials**
    - **AWS S3 credentials & bucket details**
    - **Replicate API Key**
- Run `composer install`
- Run `npm install`

### Run the project
- Run `php artisan serve`
- Run `npm run dev`
- Now, you can access the application at `http://localhost:8000`

## Tech Stack - Made in ❤️ with Laravel & React

### Backend & Frontend
- [Laravel](https://laravel.com/) - The PHP Framework
- [InertiaJS](https://inertiajs.com/) - To Build Single-page Apps
- [ReactJS](https://react.dev/) -  Library for user interfaces
- [TailwindCSS](https://tailwindcss.com/) - The CSS Framework
- [shadcn/ui](https://ui.shadcn.com/) - Designed components

### Database
- [MySQL](https://www.mysql.com/) - The Database

### Third Party APIs
- [Replicate](https://replicate.com) - AI API to Generate Images
- [AWS S3](https://aws.amazon.com/s3/) - Cloud Storage for Temporary Storage

### Server & Deployment
- [Vultr](https://www.vultr.com/) - Cloud Server
- [Forge](https://forge.laravel.com/) - Server Management
- [Cloudflare](https://www.cloudflare.com/) - DNS Management

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Credits
- https://github.com/Nutlope/restorePhotos
- https://github.com/TencentARC/GFPGAN
