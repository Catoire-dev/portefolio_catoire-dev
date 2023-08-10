import '../Projects.scss'

export const ProjectsCard = () => {
    
    return (
        <div className="project box">
            <div className='project-title'>
                <h2>Project Name</h2>
                <p>06/2033</p>
            </div>
            <i>client</i>
            <div className='project-content'>
                <img src="https://picsum.photos/300" alt="Miniature du project : name" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam ipsa, ad reprehenderit sunt nemo ipsam repellat explicabo, recusandae modi dolor molestiae voluptate minima ducimus, dignissimos veritatis mollitia debitis fugit.</p>
                {/* <a href="/project/id"></a> */}
            </div>
        </div>
    )
}