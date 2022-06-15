const paginate = (followers) => {
  const itemsPerPage = 9; //her sayfada 10 tane olacak şekilde.

  const pages = Math.ceil(followers.length / itemsPerPage); //sayfalama yöntemi
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    // yeni bir array örneği oluşturur ve _ ise ilk argüman olarak düşünebiliriz..
    const start = index * itemsPerPage;

    return followers.slice(start, start + itemsPerPage); // slice yöntemi bir dizide seçili olan itemleri yeni bir dizi olarak tekrar döndürür başlangıçtan bitiş noktasına kadar.
  });
  return newFollowers;
};

export default paginate;
