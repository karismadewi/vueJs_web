<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;
    protected $table = 'packages';
    protected $primaryKey = 'id_pk';
    protected $fillable =[
        'id_user',
        'path_thumbnail',
        'title', 
        'price', 
        'include', 
    ];
}
