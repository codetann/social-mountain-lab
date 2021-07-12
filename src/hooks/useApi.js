import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function useApi(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  const post = (text) => {
    axios
      .post(url, {
        text: text,
      })
      .then((res) => {
        setData(res.data);
      });
  };

  const put = (id, text) => {
    axios.put(url + `?id=${id}`, { text }).then((res) => {
      setData(res.data);
    });
  };

  const del = (id) => {
    axios.delete(url + `?id=${id}`).then((res) => {
      setData(res.data);
    });
  };

  return [data, post, put, del];
}
