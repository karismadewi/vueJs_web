<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guide extends Model
{
    use HasFactory;
    protected $table = 'guides';
    protected $primaryKey = 'id_guide';
    protected $fillable =[
        'path_photo_profile',
        'name', 
        'address', 
        'languages', 
        'status'
    ];
}
