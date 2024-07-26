
import "server-only";

export const serverSideFunction = () => {
    console.log(
        `Use multiple libraries,
        interact with a database,
        use environment variables,
        process confidential information`
    );

    return "server result";
};
