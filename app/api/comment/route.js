import { NextResponse } from "next/server";
import commentModel from "../../../database/model/comment";
import connectDB from '../../../database/connection/connectDB';





export async function POST(req) {

    await connectDB();

    const { username, email, commentbox, blogId } = await req.json();


    if (!username || !email || !commentbox || !blogId) {
        return NextResponse.json({ success: false, message: 'All fields are required!' });
    }
    try {
        const addComment = new commentModel({
            blogId,
            username,
            email,
            commentbox
        });
        await addComment.save();
        return NextResponse.json({ success: true, message: 'Comment has been added ' }, { new: true });
    } catch (err) {
        console.log(err.message);
        return NextResponse.json({ success: false, message: 'Could not add comment!', err });
    }
}