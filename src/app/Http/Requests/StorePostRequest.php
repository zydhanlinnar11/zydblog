<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->tokenCan('create-post');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|unique:posts|max:64',
            'slug' => 'required|unique:posts|max:255',
            'user_id' => 'required|uuid|exists:users,id|max:255',
            'description' => 'required|max:255',
            'markdown' => 'required|max:65535',
            'cover_file_name' => 'required',
            'created_at' => 'required',
            'updated_at' => 'required',
            'visibility' => 'numeric|min:1|max:3',
        ];
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'slug' => Str::slug($this->title),
            'user_id' => $this->user()->id,
            'created_at' => now(),
            'updated_at' => now(),
            'cover_file_name' => 'cover',
        ]);
    }
}
