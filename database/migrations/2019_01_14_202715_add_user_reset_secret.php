<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUserResetSecret extends Migration
{
   /**
   * Run the migrations.
   *
   * @return void
   */
   public function up()
   {
      Schema::table('users', function($table) {
         $secretSize = 16;
         $base64Size = (($secretSize + 3 - 1) / 3) * 4;

         $table->string('reset_secret', $base64Size)->nullable();
      });
   }

   /**
   * Reverse the migrations.
   *
   * @return void
   */
   public function down()
   {
      Schema::table('users', function($table) {
         $table->dropColumn('reset_secret');
      });
   }
}
