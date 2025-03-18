import React, {Suspense} from "react";
import Loading from "@pages/@common/common/Loading.tsx";

const withSuspense = (component: React.ReactNode) => (
    <Suspense fallback={<Loading />}>{component}</Suspense>
);

export default withSuspense;
