/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  reactStrictMode: true,
  images:{
  unoptimized:true,
  }
}

//module.exports = nextConfig
module.exports = {
  images:{
    unoptimized:true,
  },
  exportPathMap: async function () {
    return {
     // "/": { page: "/" },
     // "/listingpage": { page: "/listingpage" },
     // "/busroutefromto": { page: "/busroutefromto" },
      "/details": { page: "/details" },
     // "/detailingtimingpage": { page: "/detailingtimingpage" },
     // "/bustimings": { page: "/bustimings" },

      // Don't include pages with getServerSideProps here
    };
  },
};