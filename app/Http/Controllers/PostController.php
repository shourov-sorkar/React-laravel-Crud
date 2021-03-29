<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Post as PostResource;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return  PostResource::collection(Post::all());
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' =>'required',
            'description' =>'required',
        ]);
        $post = new Post([
            'title' => $request->title,
            'description' => $request->description,
        ]);
        $post->save();
        return response()->json([
            'data' =>'Post created!'
            ,
            'status' => '200'
        ]);
    }
    /**
     * Show the form for editing  specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       return new PostResource(Post::findorFail($id));
    }
    // public function show(Request $request, $id)
    // {
    //     $request->validate([
    //         'title' =>'required',
    //         'description' =>'required',
    //     ]);
    //     $post = Post::findorFail($id);
    //     $post->title = $request->title;
    //     $post->description = $request->description;
    //     $post->save();
    //     return response()->json([
    //         'data' =>'Post updated!',
    //         'status' => '200'
    //     ]);
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' =>'required',
            'description' =>'required',
        ]);
        $post = Post::findorFail($id);
        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();
        return response()->json([
            'data' =>'Post updated!',
            'status' => '200'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::findorFail($id);
        $post->delete();
    }
}
