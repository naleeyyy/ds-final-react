const Contact = () => {
    return (
        <main style={{
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr',
            backdropFilter: 'drop-shadow(5px)',
            borderRadius: '0.5rem',
        }}>
            <form action="" className="flex" style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                boxShadow: '0px 0px 5px -1px white',
                borderRadius: '1rem'
            }}>
                <h1 className="gradient-text">hello</h1>
                <label htmlFor="" className="gradient-text">Name</label>
                <input type="text" name="" id="" />
                <label htmlFor="" className="gradient-text">Email</label>
                <input type="email" name="" id="" />
                <label htmlFor="" className="gradient-text">Text</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button type="submit" className="button" style={{
                    outline: 'none',
                    border: 'none',
                    cursor: 'pointer'
                }}>Submit</button>
            </form>
        </main>
    )
}

export default Contact