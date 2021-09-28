/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { useRouter } from "next/router";

import { TrackerContext } from "contexts";

const TrackerProvider: React.FC = (props) => {
  const router = useRouter();
  // If the user has ACESS_TOKEN, we will need to keep track of any
  // login and logout changes
  // TODO: Integerate user ACESS_TOKEN/firebase

  // Keep track of whether GA has been initialized
  const [initialized, setInitialized] = useState(false);

  const handleRouteChange = (url: string) => {
    ReactGA.set({ page: url });
    ReactGA.pageview(url);
  };

  // Logging Events
  const logEvent = ({ category = "", action = "", label = "" }) => {
    if (initialized) {
      ReactGA.event({
        category,
        action,
        label,
      });
    }
  };

  useEffect(() => {
    // TODO: Integerate user ACESS_TOKEN/firebase

    if (!initialized) {
      ReactGA.initialize(
        "UA-208760462-1"
        // {
        //   gaOptions: {
        //     cookieDomain: 'none',
        //   },
        //   // debug: true,
        // }
      );
      router.events.on("routeChangeComplete", handleRouteChange);
      setInitialized(true);
    }

    // Clean up
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, []);

  return <TrackerContext.Provider value={{ logEvent }} {...props} />;
};

export default TrackerProvider;

// import { useTracking } from 'contexts/tracker';

// function Form(props) {
//   const { logEvent } = useTracking();
//   return (
//     <form
//       onSubmit={() => {
//         // code that does something to submit data
//         logEvent({
//           category: 'ExampleCategory',
//           action: 'Submitted Data',
//           label: 'Special Label',
//         });
//       }}>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
