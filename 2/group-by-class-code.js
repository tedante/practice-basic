/**
 * Buatlah sebuah function yang menerima 1 inputan:
    INPUT
    ---------
    [
      { name: 'John', score: 80, classCode: 'A' },
      { name: 'Mike', score: 60, classCode: 'B' },
      { name: 'Budi', score: 70, classCode: 'C' },
      { name: 'Siti', score: 50, classCode: 'A' },
      { name: 'Aaron', score: 10, classCode: 'A' },
      { name: 'Arthur', score: 10, classCode: 'C' },
      { name: 'Osass', score: 10, classCode: 'B' },
      { name: 'Yolo', score: 90, classCode: 'C' },
    ];
    dan akan menghasilkan output
    OUTPUT
    -----------
    [
      { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
      { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
      { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
    ]
    *student passed apabila score 70 keatas
 */


    function groupByClassCode(students) {
  
    }
    
    // [
    //   { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
    //   { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
    //   { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
    // ]
    
    console.log(groupByClassCode([
        { name: 'John', score: 80, classCode: 'A' },
        { name: 'Mike', score: 60, classCode: 'B' },
        { name: 'Budi', score: 70, classCode: 'C' },
        { name: 'Siti', score: 50, classCode: 'A' },
        { name: 'Aaron', score: 10, classCode: 'A' },
        { name: 'Arthur', score: 10, classCode: 'C' },
        { name: 'Osass', score: 10, classCode: 'B' },
        { name: 'Yolo', score: 90, classCode: 'C' },
        { name: 'Aaron', score: 10, classCode: 'A1' },
        { name: 'Arthur', score: 10, classCode: 'C3' },
        { name: 'Osass', score: 10, classCode: 'Z' },
        { name: 'Yolo', score: 90, classCode: 'Z' }
    ]))
    
    /**
     * [
     *     { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
     *     { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
     *     { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
     *   ]
     */