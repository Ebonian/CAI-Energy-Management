import { createContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import axios from "../axios";

// import data from "../../../server/data/data.json";

export const Context = createContext(null);

export default function MainContext({ children }) {
  // authentication
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [session, setSession] = useState({});

  const [isSupport, setIsSupport] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setSession(currentUser);
  });

  var username = session?.email;

  if (`${session?.email}`.includes("support")) {
    var username = `${username}`.slice(0, -12);
  } else {
    var username = `${username}`.slice(0, -11);
  }

  useEffect(() => {
    if (`${session?.email}`.includes("support")) {
      setIsSupport(true);
    } else {
      setIsSupport(false);
    }
  }, [session]);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      // console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  // api
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`/${username}`).then((res) => {
      setData(res.data);
    });
  }, [username]);

  var isData = Object.keys(data).length;

  if (Object.keys(data).length > 0) {
    isData = 1;
  }

  // eff score ranking system
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    axios.get("/sync").then((res) => {
      setAllData(res.data);
    });
  }, []);

  const allScore = allData.map((x) => x.score.slice(-1));
  const score = [].concat.apply([], allScore);
  const sortedScore = score.sort((a, b) => {
    return b - a;
  });

  const [branchRank, setBranchRank] = useState(null);

  useEffect(() => {
    if (isData) {
      setBranchRank(sortedScore.indexOf(+data.score.slice(-1).join("")) + 1);
    }
  }, [sortedScore]);

  // navigation
  const [focusNav, setFocusNav] = useState(false);

  const focusNavHandler = () => {
    setFocusNav(!focusNav);
  };
  return (
    <Context.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        session,
        username,
        isSupport,
        login,
        logout,
        focusNavHandler,
        focusNav,
        setFocusNav,
        data,
        isData,
        branchRank,
      }}
    >
      {children}
    </Context.Provider>
  );
}
