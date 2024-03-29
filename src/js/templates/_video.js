// if (document.querySelector('.video')) {
//     const videos = document.querySelectorAll('.video');

//     // generate video url
//     const generateUrl = (id) => {
//         const query = '?rel=0&showinfo=0&autoplay=1';

//         return 'https://www.youtube.com/embed/' + id + query;
//     };

//     // creating iframe
//     const createIframe = (id) => {
//         const iframe = document.createElement('iframe');

//         iframe.setAttribute('allowfullscreen', '');
//         iframe.setAttribute('allow', 'autoplay; encrypted-media');
//         iframe.setAttribute('src', generateUrl(id));

//         return iframe;
//     };

//     // main code
//     videos.forEach((el) => {
//         const videoHref = el.getAttribute('data-video');

//         const deletedLength = 'https://youtu.be/'.length;

//         const videoId = videoHref.substring(deletedLength, videoHref.length);

//         const img = el.querySelector('img');
//         const youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg';
//         img.setAttribute('src', youtubeImgSrc);

//         el.addEventListener('click', (e) => {
//             e.preventDefault();

//             const iframe = createIframe(videoId);
//             el.querySelector('img').remove();
//             el.appendChild(iframe);
//             el.querySelector('button').remove();
//         });
//     });
// }
