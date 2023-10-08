import Link from 'next/link'

export default function Sidebar() {
    return (
        <>
            <h4 className={ 'fst-italic' }>{ 'Related posts' }</h4>
            <ul className={ 'list-unstyled' }>
                <li className={ 'row gap-2 border-top mx-0 py-3' }>
                    <div className={ 'col-auto px-0' }>
                        <img src={ '//localhost:8080/blog-posts/images/42-192x192.jpg' } width={ 112 } height={ 112 } alt={ '42-192x192.jpg' } />
                    </div>
                    <div className={ 'col-7 px-0' }>
                        <h5 className={ 'my-0' }>{ 'Lorem Ipsum Lorem Ipsum' }</h5>
                        <p className={ 'text-muted small' }>{ 'January 1, 2021' }</p>
                    </div>
                </li>
                <li className={ 'row gap-2 border-top mx-0 py-3' }>
                    <div className={ 'col-auto px-0' }>
                        <img src={ '//localhost:8080/blog-posts/images/88-192x192.jpg' } width={ 112 } height={ 112 } alt={ '42-192x192.jpg' } />
                    </div>
                    <div className={ 'col-7 px-0' }>
                        <h5 className={ 'my-0' }>{ 'Lorem Ipsum Lorem Ipsum' }</h5>
                        <p className={ 'text-muted small' }>{ 'January 1, 2021' }</p>
                    </div>
                </li>
            </ul>
        </>
    )
}