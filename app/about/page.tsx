import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="bg-white ">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Developer
          </h2>
          <ul
            role="list"
            className="grid gap-x-8  sm:grid-cols-2 xl:col-span-2"
          >
            <li>
              <div className="flex items-center gap-x-6">
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Miguel Gonzalez
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I created this API so that others can use it to populate their
            front-end applications with mock user data, thus saving their time
            from building an API just for sample data. This way, they can focus
            on working on the frontend.
          </p>
        </div>

        <ul role="list" className="grid gap-x-8  sm:grid-cols-2 xl:col-span-2">
          <li>
            <div className="flex items-center gap-x-6">
              <div>
                <p className="text-sm font-semibold leading-6 ">
                  Connect with me on &nbsp;
                  <a
                    href="https://www.linkedin.com/in/miguel-gonzalez-b50170282/"
                    className="text-indigo-600"
                    target="_blank"
                  >
                    LinkedIN
                  </a>
                </p>
                <p className="text-sm font-semibold leading-6 ">
                  Or checkout my &nbsp;
                  <a
                    href="https://github.com/mig-gonz"
                    className="text-indigo-600"
                    target="_blank"
                  >
                    GitHUb
                  </a>
                </p>
              </div>
            </div>
          </li>
        </ul>
        <Link href={"/"} className="btn btn-outline btn-primary btn-wide mt-5">
          Go Back
        </Link>
      </div>
    </div>
  );
}
