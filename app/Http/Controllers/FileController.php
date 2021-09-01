<?php

namespace App\Http\Controllers;

use App\Models\File;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FileController extends Controller
{
    public function add(Request $request)
    {
        try {
            $posts = $request->all();
            foreach($posts as $image) {
                $file = new File();
                $file->file_name = $image['filename'];
                $file->description = $image['description'];
                // if($image['attribution'])
                //     $file->attribution = $image['attribution'];
                $file->url = $image['path'];
                $file->user_id = '9ddb1cf6-380b-4bc3-9760-22f7856c98af';
                $file->file_type_id = 1;
                $file->save();
            }
            return $posts;
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }
    
    public function get_by_name(string $name)
    {
        try {
            $result = DB::table('files')
                ->select([
                    'file_name',
                    'url',
                ])->where('file_name', '=', $name)
                ->get();
            if(!$result) {
                return response()->json(['message' => 'File not found.'], 404);
            }
            return $result[0];
        } catch(Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
