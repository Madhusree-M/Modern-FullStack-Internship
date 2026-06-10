export default function StudetForm()
{
    return(
        <>
        <form action="" className="m-7">
            <label htmlFor="id"> Id : </label>
            <input type="number" id="id" name="id" className="border rounded-lg"/>

            <br /><br />

            <label htmlFor="name">Name : </label>
            <input type="text" name="name" id="name" className="border"/>

            <br /><br />

            <label htmlFor="marks">Marks : </label>
            <input type="number" name="marks" id="marks" className="border"/>

            <br /><br />

            <label htmlFor="isPresent">isPresent : </label>
            <input type="text" className="border"/>

        </form>
        </>
    )
}