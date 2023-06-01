import React from "react";

export type PostComponentProps = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export const PostComponent = (props: {post: PostComponentProps }) => {
    const { id, name } = props.post;
    return (
        <>
            <div style={{display: 'flex', marginBottom: '8px'}}>
                <span data-testid="id" style={{marginRight: '6px'}}>{id}.</span>
                <span data-testid="name">{name}</span>
            </div>
        </>
    );
}
