import React from 'react'

export default function RenderBlock() {
    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <p>{title}</p>
                    <p>{authors}</p>
                </div>
                <div className='col-md-6'>
                    <a name="View" id="View" class="btn btn-primary" href="#" role="button">View</a>
                    <a name="Save" id="Save" class="btn btn-primary" href="#" role="button">Save</a>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    <img src={imageLinks} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="Cover Image" />
                </div>
                <div className='col-md-10'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
