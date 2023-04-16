import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;

  res.status(200).json({
    _id: 1,
    title: category,
    siteCategoryKeyword: [
      {
        _id: 1,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 5,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 11,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 12,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 17,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 18,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 26,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 27,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 50,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 62,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 63,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 71,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 72,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 77,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 78,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 80,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 87,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 97,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      }, {
        _id: 101,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/341139704_730615408806590_5394512627668967682_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=maajJoQTJYwAX9w5D_z&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDYzNDE3MzE4NjcxMTQ5MA%3D%3D.2-ccb7-5&oh=00_AfAAebRhSbJam7fNsjUCKFA_6Qq81OFY1Fbp2wJdyLXvXQ&oe=644063C7&_nc_sid=1527a3',
        },
      },
    ],
  });
}
