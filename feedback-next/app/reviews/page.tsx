import reviewSubmit, { getReviews } from "../actions/reviewSubmit";
import Button from "../components/Button";

interface Review{
    id: number,
    username: string,
    email: string,
    review: string,
    rating: string
}

async function Review()
{
    const data = await getReviews();

    const sum = data.reduce((accum:number , review:Review) => {
        return accum + Number(review.rating);
    },0);

    const avg = sum/data.length;


    return (
        <>
        <form action={reviewSubmit}>

            <label htmlFor="username">
                Userame : 
            </label>
            <input
            type="text"
            name="username"
            id="username"
            >
            </input>

            <br></br>
            <br></br>



            <label htmlFor="email">
                Email : 
            </label>
            <input
            type="text"
            name="email"
            id="email"
            >
            </input>

            <br></br>
            <br></br>


            <label htmlFor="review">
                Review : 
            </label>
            <textarea
            name="review"
            id="review"
            >
            </textarea>

            <br></br>
            <br></br>

            <label htmlFor="rating"></label>
            <input type="number" name="rating" id="rating" 
            min="1" max="5"/>

            <br/> <br />
            <Button/>
            {/* <button type="submit">Submit</button> */}
        </form>

        {/* feedack display */}
        <h1>Average ratings : {avg.toFixed(2)}</h1>
        {
            data.map((review:Review, idx:number) => (
                <div key={review.id}>
                    <h3>{review.username}</h3>
                    <p>{review.email}</p>
                    <p>{review.review}</p>
                    <p>{review.rating}</p>
                    <br/><br/>
                </div>
            ))
        }
        </>
    )
}

export default Review;


// producct reating , 
// username , email, review, rating
// user avg arting, username , email, review

// h1 {avg}