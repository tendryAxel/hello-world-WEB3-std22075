

export default ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div>
            <header>
                <div><a href="#" title="main">App</a></div>
            </header>
            {children}
            <footer>
                <div>
                    <h3>App</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum, itaque quae tenetur quia amet sed quibusdam necessitatibus voluptate ullam repellat architecto laborum tempora possimus ea illum sequi non nobis.</p>
                </div>
                <div>
                    <h3>Comment</h3>
                    <br />
                    <input
                        type="text"
                        placeholder="Email" />
                </div>
            </footer>
        </div>
    )
}