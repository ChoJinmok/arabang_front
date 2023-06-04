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
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 5,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 11,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 12,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 17,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 18,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 26,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 27,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 50,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 62,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 63,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 71,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 72,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 77,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 78,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 80,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 87,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 97,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      }, {
        _id: 101,
        site: {
          _id: 1,
          link: 'https://instagram.com/943_snap?igshid=YmMyMTA2M2Y=',
          name: '943스냅',
          price: '0.00',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        },
      },
    ],
  });
}
