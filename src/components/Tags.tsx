import React from "react";

export interface TagsProps{
    tags: string[]
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
    return <>
        {tags.map(tag => {
            <span className="tag">{tag}</span>
        })}
    </>
}

export default Tags;