export default ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div>
            <div>
                <div><a href="#" title="main">App</a></div>
            </div>
            {children}
            <div>
                <div>
                    <h1></h1>
                    <p></p>
                </div>
                <div>
                    <input type="text" placeholder="Email" />
                </div>
            </div>
        </div>
    )
}