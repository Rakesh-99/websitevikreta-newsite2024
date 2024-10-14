import mongoose from "mongoose";
import commentModel from "../../../../database/model/comment";
import connectDB from "../../../../database/connection/connectDB";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    await connectDB();
    const { blogId } = params;

    try {
        const result = await commentModel.find({ blogId });
        if (result) {
            return NextResponse.json({ success: true, message: 'Comments have been fetched', comment: result })
        }
    } catch (err) {
        console.log('Server side error -', err);
        return NextResponse.json({ success: false, message: 'Could not fetch comment -', err });
    }
};