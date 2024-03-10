

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
                    <h1></h1>
                    <p></p>
                </div>
                <div>
                    <input type="text" placeholder="Email" />
                </div>
            </footer>
        </div>
    )
}