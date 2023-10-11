<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_usages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('code');
            $table->integer('used')->default(0);
            $table->timestamps();
            $table->index(['id', 'user_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_usages');
    }
};
