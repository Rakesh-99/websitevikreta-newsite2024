import commentModel from '../../../../../database/model/comment';
import connectDB from '../../../../../database/connection/connectDB';
import { NextResponse } from 'next/server';


export async function PUT(req, { params }) {

    const { commentId } = params
    const { reply } = await req.json();

    if (!commentId) {
        return NextResponse.json({ success: false, message: 'Comment not found!' })
    }
    try {
        await connectDB();
        await commentModel.findByIdAndUpdate(commentId, {
            $push: {
                commentReplies: {
                    comment: reply,
                }
            }
        })
        return NextResponse.json({ success: true, message: 'reply has been submitted' }, { new: true });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Could not add reply!' });
    }
} 